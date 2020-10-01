package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.builder.LiderBuilder;
import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.util.IntTestComum;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@Transactional
public class LiderRecursoIT extends IntTestComum {

    @Autowired
    private LiderBuilder liderBuilder;

    private static String RECURSO = "/lideres/";

    @Test
    public void obterTodosTest() throws Exception {
        getMockMvc().perform(get(RECURSO))
            .andExpect(status().isOk());
    }

    @Test
    public void obterPorIdTest() throws Exception {
        Lider lider = liderBuilder.construir();
        getMockMvc().perform(get(RECURSO + lider.getId()))
            .andExpect(status().isOk());
    }

    @Test
    public void obterPorIdInexistenteTest() throws Exception {
        getMockMvc().perform(get(RECURSO + "0"))
            .andExpect(status().isBadRequest());
    }

    @Test
    public void removerTest() throws Exception {
        Lider lider = liderBuilder.construir();
        getMockMvc().perform(delete(RECURSO + lider.getId()))
            .andExpect(status().isOk());
    }

    @Test
    public void salvarTest() throws Exception {
        Lider lider = liderBuilder.construirEntidade();
        getMockMvc().perform(post(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(lider)))
            .andExpect(status().isCreated());
    }

    @Test
    public void atualizarTest() throws Exception {
        Lider lider = liderBuilder.construirEntidade();
        getMockMvc().perform(put(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(lider)))
            .andExpect(status().isOk());
    }
}
