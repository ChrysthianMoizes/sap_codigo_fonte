package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.domain.OrdemServico;
import br.gov.basis.sap.sapservice.domain.Sprint;
import br.gov.basis.sap.sapservice.domain.TipoSituacao;
import br.gov.basis.sap.sapservice.repository.OrdemServicoRepository;
import br.gov.basis.sap.sapservice.service.mapper.OrdemServicoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Component
public class OrdemServicoBuilder extends ConstrutorDeEntidade<OrdemServico>{

    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    @Autowired
    private OrdemServicoMapper ordemServicoMapper;

    @Autowired
    private  ProjetoBuilder projetoBuilder;

    @Override
    public OrdemServico construirEntidade() throws ParseException {
        OrdemServico ordemServico = new OrdemServico();
        TipoSituacao tipoSituacao = new TipoSituacao();
        List<Sprint> listaSprints = new ArrayList<>();

        ordemServico.setNome("Lider 1");
        ordemServico.setProjeto(projetoBuilder.construir());
        ordemServico.setSituacao(tipoSituacao);
        ordemServico.setQtdDefeitosCliente(0);
        ordemServico.setQtdDefeitosInterno(0);
        ordemServico.setDataProximaEntrega(LocalDate.now());
        ordemServico.setFabrica("SRC");
        ordemServico.setPrazo(LocalDate.now());
        ordemServico.setPontosFuncao(45.0);
        ordemServico.setSprints(listaSprints);
        return ordemServico;
    }

    @Override
    protected OrdemServico persistir(OrdemServico entidade) {
        return ordemServicoRepository.save(entidade);
    }

    @Override
    protected OrdemServico obterPorId(Long id) {

        return null;
    }

    @Override
    protected Collection<OrdemServico> obterTodos() {
        return null;
    }


}
