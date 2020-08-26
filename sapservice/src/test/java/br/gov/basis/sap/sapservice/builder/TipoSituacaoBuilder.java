package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.TipoSituacao;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;
@Component
public class TipoSituacaoBuilder extends ConstrutorDeEntidade<TipoSituacao> {

    @Override
    public TipoSituacao construirEntidade() throws ParseException {
        TipoSituacao tipoSituacao = new TipoSituacao();
        tipoSituacao.setDescricao("Em Codificacao");

        return tipoSituacao;

    }

    @Override
    public TipoSituacao persistir(TipoSituacao entidade) {
        return null;
    }

    @Override
    public TipoSituacao obterPorId(Long id) {
        return null;
    }

    @Override
    public Collection<TipoSituacao> obterTodos() {
        return null;
    }
}
