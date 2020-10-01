package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.service.SprintServico;
import br.gov.basis.sap.sapservice.service.dto.SprintDTO;
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
@RequestMapping("/sprints")
@RequiredArgsConstructor
public class SprintRecurso {

    private final SprintServico sprintServico;

    @GetMapping
    public ResponseEntity<List<SprintDTO>> obterTodos() {
        List<SprintDTO> sprints = sprintServico.obterTodos();
        return ResponseEntity.ok().body(sprints);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SprintDTO> obterPorId(@PathVariable Integer id) {
        SprintDTO sprint = sprintServico.obterPorId(id);
        return ResponseEntity.ok().body(sprint);
    }

    @PostMapping
    public ResponseEntity<SprintDTO> salvar(@RequestBody SprintDTO sprintDTO) throws URISyntaxException {
        SprintDTO sprint = sprintServico.salvar(sprintDTO);
        return ResponseEntity.created(new URI("/sprints/")).body(sprint);
    }

    @PutMapping
    public ResponseEntity<Void> atualizar(@RequestBody SprintDTO sprintDTO) {
        sprintServico.salvar(sprintDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable Integer id) {
        sprintServico.removerPorId(id);
        return ResponseEntity.ok().build();
    }
}
