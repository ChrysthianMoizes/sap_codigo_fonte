package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.service.OrdemServicoServico;
import br.gov.basis.sap.sapservice.service.dto.OrdemServicoDTO;
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
@RequestMapping("/ordens-servico")
@RequiredArgsConstructor
public class OrdemServicoRecurso {

    private final OrdemServicoServico ordemServicoServico;

    @GetMapping
    public ResponseEntity<List<OrdemServicoDTO>> obterTodos() {
        List<OrdemServicoDTO> ordemServicoDTOS = ordemServicoServico.obterTodos();
        return ResponseEntity.ok().body(ordemServicoDTOS);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdemServicoDTO> obterPorId(@PathVariable Integer id) {
        OrdemServicoDTO ordemServicoDTO = ordemServicoServico.obterPorId(id);
        return ResponseEntity.ok().body(ordemServicoDTO);
    }

    @PostMapping
    public ResponseEntity<OrdemServicoDTO> salvar(@RequestBody OrdemServicoDTO ordemServicoDTO) throws URISyntaxException {
        OrdemServicoDTO dto = ordemServicoServico.salvar(ordemServicoDTO);
        return ResponseEntity.created(new URI("/ordens-servico/")).body(dto);
    }

    @PutMapping
    public ResponseEntity<Void> atualizar(@RequestBody OrdemServicoDTO dto) {
        ordemServicoServico.salvar(dto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable Integer id) {
        ordemServicoServico.removerPorId(id);
        return ResponseEntity.ok().build();
    }
}
