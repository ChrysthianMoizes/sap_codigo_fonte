package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.service.DominioFixoServico;
import br.gov.basis.sap.sapservice.service.dto.DominioFixoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dominios")
@RequiredArgsConstructor
public class DominioFixoRecurso {

    private final DominioFixoServico dominioFixoServico;

    @GetMapping("/clientes")
    public ResponseEntity<List<DominioFixoDTO>> obterClientes() {
        List<DominioFixoDTO> dtos = dominioFixoServico.obterClientes();
        return ResponseEntity.ok().body(dtos);
    }

    @GetMapping("/tipos-situacao")
    public ResponseEntity<List<DominioFixoDTO>> obterTiposSituacao() {
        List<DominioFixoDTO> dtos = dominioFixoServico.obterSituacoes();
        return ResponseEntity.ok().body(dtos);
    }

    @GetMapping("/tipos-status")
    public ResponseEntity<List<DominioFixoDTO>> obterTipoStatus() {
        List<DominioFixoDTO> dtos = dominioFixoServico.obterStatus();
        return ResponseEntity.ok().body(dtos);
    }
}
