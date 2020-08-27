package br.gov.basis.sap.sapservice.web.rest;

import br.gov.basis.sap.sapservice.builder.ClienteBuilder;
import br.gov.basis.sap.sapservice.util.IntTestComum;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@Transactional
public class ClienteRecursoIT extends IntTestComum {
    @Autowired
    private ClienteBuilder clienteBuilder;

    private static  String RECURSO ="/dominios/clientes/";

    @Test
    public void obterTodosTest() throws Exception {
        getMockMvc().perform(get(RECURSO))
            .andExpect(status().isOk());
    }





}
