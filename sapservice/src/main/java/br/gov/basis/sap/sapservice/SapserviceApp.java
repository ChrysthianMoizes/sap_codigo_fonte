package br.gov.basis.sap.sapservice;

import br.gov.nuvem.comum.microsservico.util.AppUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableConfigurationProperties({LiquibaseProperties.class})
@EnableDiscoveryClient
@Slf4j
@RequiredArgsConstructor
@EntityScan("br.gov.basis.sap.sapservice.domain")
@EnableJpaRepositories("br.gov.basis.sap.sapservice.repository")
public class SapserviceApp implements InitializingBean {

    private final Environment env;

    @Override
    public void afterPropertiesSet() throws Exception {
        AppUtil.checkProfiles(env, log);
    }

    public static void main(String[] args) {
        AppUtil.startup(args, SapserviceApp.class, log);
    }
}

