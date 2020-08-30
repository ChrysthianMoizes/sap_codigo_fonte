package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.builder.SprintBuilder;
import br.gov.basis.sap.sapservice.domain.Sprint;
import br.gov.basis.sap.sapservice.util.IntTestComum;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class )
@Transactional
public class SprintRecursoIT extends IntTestComum {

    @Autowired
    private SprintBuilder sprintBuilder;

    private static String RECURSO = "/sprints/";

    @Test
    public void obterTodosTest() throws Exception {
        getMockMvc().perform(get(RECURSO)).
            andExpect(status().isOk());
    }

    @Test
    public void obterPorIdTest() throws Exception {
       Sprint sprint = sprintBuilder.construir();
        getMockMvc().perform(get(RECURSO + sprint.getId())).
            andExpect(status().isOk());
    }

    @Test
    public void removerTest() throws Exception {
        Sprint sprint = sprintBuilder.construir();
        getMockMvc().perform(delete(RECURSO + sprint.getId()))
            .andExpect(status().isOk());
    }

    @Test
    public void salvarTest() throws Exception {
        Sprint sprint = sprintBuilder.construir();
        getMockMvc().perform(post(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(sprint)))
            .andExpect(status().isCreated());
    }

    @Test
    public void atualizarTest() throws Exception {
        Sprint sprint = sprintBuilder.construir();
        getMockMvc().perform(put(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(sprint)))
            .andExpect(status().isOk());
    }
}
