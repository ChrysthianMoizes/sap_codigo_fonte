package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.service.ProjetoServico;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDTO;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDetalheDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/projetos")
@RequiredArgsConstructor
public class ProjetoRecurso {

    private final ProjetoServico projetoServico;

    @GetMapping
    public ResponseEntity<List<ProjetoDTO>> obterTodos() {
        List<ProjetoDTO> dto = projetoServico.obterTodos();
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping("/detalhe")
    public ResponseEntity<List<ProjetoDetalheDTO>> obterDetalhe() {
        List<ProjetoDetalheDTO> dto = projetoServico.obterTodosDetalhe();
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjetoDTO> obterPorId(@PathVariable Integer id) {
        ProjetoDTO dto = projetoServico.obterPorId(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<ProjetoDTO> salvar(@RequestBody ProjetoDTO projetoDTO) throws URISyntaxException {
        ProjetoDTO dto = projetoServico.salvar(projetoDTO);
        return ResponseEntity.created(new URI("/projetos/")).body(dto);
    }

    @PutMapping
    public ResponseEntity<Void> atualizar(@RequestBody ProjetoDTO projetoDTO) {
        projetoServico.salvar(projetoDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable Integer id) {
        projetoServico.removerPorId(id);
        return ResponseEntity.ok().build();
    }
}
