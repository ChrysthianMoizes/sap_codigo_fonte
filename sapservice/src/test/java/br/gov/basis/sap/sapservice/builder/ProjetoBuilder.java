
package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Cliente;
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

    @Override
    public Projeto construirEntidade() throws ParseException{

        Cliente cliente = new Cliente();
        cliente.setId(1);

        Projeto projeto = new Projeto();
        projeto.setNome("TESTE");
        projeto.setLider(liderBuilder.construir());
        projeto.setCliente(cliente);
        projeto.setTestador("Lucas");
        projeto.setRevisor("Rayan");
        projeto.setGerente("Paulo Henrique");
        return projeto;
    }

    @Override
    protected  Projeto persistir(Projeto entidade){
        return projetoRepository.save(entidade);
    }

    @Override
    protected  Projeto obterPorId(Long id){
        return null;
    }

    @Override
    protected Collection<Projeto> obterTodos(){
        return null;
    }

}
