package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Cliente;
import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.repository.ClienteRepository;
import br.gov.basis.sap.sapservice.repository.LiderRepository;
import br.gov.basis.sap.sapservice.repository.ProjetoRepository;
import br.gov.basis.sap.sapservice.service.mapper.LiderMapper;
import br.gov.basis.sap.sapservice.service.mapper.ProjetoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class ProjetoBuilder extends ConstrutorDeEntidade<Projeto>{

    @Autowired
    private ProjetoRepository projetoRepository;

    @Autowired
    private ProjetoMapper projetoMapper;

    @Autowired
    private LiderBuilder liderBuilder;

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public Projeto construirEntidade() throws ParseException {
        Projeto projeto = new Projeto();

        Cliente cliente = new Cliente();
        cliente.setId(1);

        projeto.setCliente(cliente);
        projeto.setGerente("Luke");
        projeto.setLider(liderBuilder.construir());
        projeto.setNome("Estrela da morte");
        projeto.setRevisor("CT3PO");
        projeto.setTestador("BB8");
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
