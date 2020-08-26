package br.gov.basis.sap.sapservice.util;

import br.gov.basis.sap.sapservice.SapserviceApp;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.persistence.EntityManager;

@SpringBootTest(classes = SapserviceApp.class)
@ExtendWith(SpringExtension.class)
//@ContextConfiguration(initializers = {IntTestComum.Initializer.class})
public abstract class IntTestComum {

    @Autowired
    private EntityManager em;

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    protected MockMvc getMockMvc() {
        return mockMvc;
    }

    protected EntityManager getEm() {
        return em;
    }

    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
//            .apply(SecurityMockMvcConfigurers.springSecurity()).build();
    }
}
