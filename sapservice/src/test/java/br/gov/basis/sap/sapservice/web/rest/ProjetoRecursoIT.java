package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.builder.LiderBuilder;
import br.gov.basis.sap.sapservice.builder.ProjetoBuilder;
import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.util.IntTestComum;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@Transactional
public class ProjetoRecursoIT extends IntTestComum {

    @Autowired
    private ProjetoBuilder projetoBuilder;

    private static String RECURSO = "/projetos/";

    @Test
    public void obterTodosTest() throws Exception {
        getMockMvc().perform(get(RECURSO))
            .andExpect(status().isOk());
    }

    @Test
    public void obterPorIdTest() throws Exception {
        Projeto projeto = projetoBuilder.construir();
        getMockMvc().perform(get(RECURSO + projeto.getId()))
            .andExpect(status().isOk());
    }

    @Test
    public void obterDetalheTest() throws Exception {
        getMockMvc().perform(get(RECURSO + "/detalhe"))
            .andExpect(status().isOk());
    }

    @Test
    public void deletarTest() throws Exception {
        Projeto projeto = projetoBuilder.construir();
        getMockMvc().perform(delete(RECURSO + projeto.getId()))
            .andExpect(status().isOk());
    }

    @Test
    public void salvarTest() throws Exception {
        Projeto projeto = projetoBuilder.construir();
        getMockMvc().perform(post(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(projeto)))
            .andExpect(status().isCreated());
    }

    @Test
    public void atualizarTest() throws Exception {
        Projeto projeto = projetoBuilder.construir();
        getMockMvc().perform(put(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(projeto)))
            .andExpect(status().isOk());
    }

}
