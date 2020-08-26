package br.gov.basis.sap.sapservice.builder;
import br.gov.basis.sap.sapservice.domain.TipoStatus;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class TipoStatusBuilder extends ConstrutorDeEntidade<TipoStatus> {
    @Override
    public TipoStatus construirEntidade() throws ParseException {
        TipoStatus tipoStatus=new TipoStatus();
        tipoStatus.setDescricao("Pausada");
        return tipoStatus;
    }

    @Override
    protected TipoStatus persistir(TipoStatus entidade) {
        return null;
    }

    @Override
    protected TipoStatus obterPorId(Long id) {
        return null;
    }

    @Override
    protected Collection<TipoStatus> obterTodos() {
        return null;
    }
}
