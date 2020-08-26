package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.repository.LiderRepository;
import br.gov.basis.sap.sapservice.service.mapper.LiderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class LiderBuilder extends ConstrutorDeEntidade<Lider>{

    @Autowired
    private LiderRepository liderRepository;

    @Autowired
    private LiderMapper liderMapper;

    @Override
    public Lider construirEntidade() throws ParseException {
        Lider lider = new Lider();
        lider.setNome("Lider 1");
        lider.setContato("lider@basis.com.br");
        return lider;
    }

    @Override
    protected Lider persistir(Lider entidade) {
        return liderRepository.save(entidade);
    }

    @Override
    protected Lider obterPorId(Long id) {
        return null;
    }

    @Override
    protected Collection<Lider> obterTodos() {
        return null;
    }
}
