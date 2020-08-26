package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.repository.ProjetoRepository;
import br.gov.basis.sap.sapservice.service.mapper.ProjetoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class ProjetoBuilder extends ConstrutorDeEntidade<Projeto> {

    @Autowired
    private ProjetoRepository projetoRepository;

    @Autowired
    private ProjetoMapper projetoMapper;

    @Autowired
    private LiderBuilder liderBuilder;

    @Autowired
    private ClienteBuilder clienteBuilder;

    @Override
    public Projeto construirEntidade() throws ParseException {
        Projeto projeto = new Projeto();

        projeto.setNome("OlaMundo");
        projeto.setTestador("Hiago");
        projeto.setRevisor("Hii");
        projeto.setLider(liderBuilder.construir());
        projeto.setGerente("Elias");
        projeto.setCliente(clienteBuilder.construir());
        return projeto;
    }

    @Override
    protected Projeto persistir(Projeto entidade) {
        return projetoRepository.save(entidade);
    }

    @Override
    protected Projeto obterPorId(Long id) {
        return null;
    }

    @Override
    protected Collection<Projeto> obterTodos() {
        return null;
    }
}
