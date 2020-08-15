package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.service.LiderServico;
import br.gov.basis.sap.sapservice.service.dto.LiderDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/lideres")
@RequiredArgsConstructor
public class LiderRecurso {

    private final LiderServico liderServico;

    @GetMapping
    public ResponseEntity<List<LiderDTO>> obterTodos() {
        List<LiderDTO> lideres = liderServico.obterTodos();
        return ResponseEntity.ok().body(lideres);
    }

    @GetMapping("/nome")
    public ResponseEntity<List<LiderDTO>> obterTodosPorNome(@RequestParam("nome") String nome) {
        List<LiderDTO> lideres = liderServico.obterTodosPorNome(nome);
        return ResponseEntity.ok().body(lideres);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LiderDTO> obterPorId(@PathVariable Integer id) {
        LiderDTO lider = liderServico.obterPorId(id);
        return ResponseEntity.ok().body(lider);
    }

    @PostMapping
    public ResponseEntity<LiderDTO> salvar(@Valid @RequestBody LiderDTO lider) throws URISyntaxException {
        LiderDTO liderSalvo = liderServico.salvar(lider);
        return ResponseEntity.created(new URI("/lideres/")).body(liderSalvo);
    }

    @PutMapping
    public ResponseEntity<Void> atualizar(@RequestBody LiderDTO lider) {
        liderServico.salvar(lider);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable Integer id) {
        liderServico.removerPorId(id);
        return ResponseEntity.ok().build();
    }
}
