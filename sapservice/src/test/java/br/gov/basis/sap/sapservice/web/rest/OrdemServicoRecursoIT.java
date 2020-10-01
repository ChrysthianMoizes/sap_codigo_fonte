package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.builder.OrdemServicoBuilder;
import br.gov.basis.sap.sapservice.builder.ProjetoBuilder;
import br.gov.basis.sap.sapservice.domain.OrdemServico;
import br.gov.basis.sap.sapservice.domain.Projeto;
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
public class OrdemServicoRecursoIT extends IntTestComum {

    @Autowired
    private OrdemServicoBuilder ordemServicoBuilder;

    private static String RECURSO = "/ordens-servico/";

    @Test
    public void obterTodosTest() throws Exception {
        getMockMvc().perform(get(RECURSO)).
            andExpect(status().isOk());
    }

    @Test
    public void obterPorIdTest() throws Exception {
        OrdemServico ordemServico  = ordemServicoBuilder.construir();
        getMockMvc().perform(get(RECURSO + ordemServico.getId())).
            andExpect(status().isOk());
    }

    @Test
    public  void obterPorProjeto() throws Exception{
        OrdemServico ordemServico  = ordemServicoBuilder.construirEntidade();
        getMockMvc().perform(get(RECURSO + ordemServico.getProjeto().getId()+"/projeto"))
            .andExpect(status().isOk());
    }

    @Test
    public void removerTest() throws Exception {
        OrdemServico ordemServico = ordemServicoBuilder.construir();
        getMockMvc().perform(delete(RECURSO + ordemServico.getId()))
            .andExpect(status().isOk());
    }

    @Test
    public void salvarTest() throws Exception {
        OrdemServico ordemServico = ordemServicoBuilder.construir();
        getMockMvc().perform(post(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ordemServico)))
            .andExpect(status().isCreated());
    }

    @Test
    public void atualizarTest() throws Exception {
        OrdemServico ordemServico = ordemServicoBuilder.construir();
        getMockMvc().perform(put(RECURSO)
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ordemServico)))
            .andExpect(status().isOk());
    }

}
