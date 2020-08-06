package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.domain.Lider;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/lideres")
public class LiderRecurso {

    @GetMapping
    public List obter() {

        Lider lider = new Lider();
        lider.setId(1);
        lider.setContato("chrysthian.moizes@basis.com.br");
        lider.setNome("Chrysthian Moizes");

        return Collections.singletonList(lider);
    }

    @GetMapping("/{id}")
    public Object obterPorId(@PathVariable Integer id) {
        System.out.println(id);
        return new Lider();
    }

    @PostMapping
    public void salvar(Lider lider) {
        //salvar usuario
    }

    @PutMapping
    public void atualizar(Lider lider) {
        //atualizar usuario
    }

    @DeleteMapping("/{id}")
    public void deletarPorId(Integer id) {
        //salvar usuario
    }
}
