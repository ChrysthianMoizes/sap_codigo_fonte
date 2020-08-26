package br.gov.basis.sap.sapservice.builder;


import br.gov.basis.sap.sapservice.domain.OrdemServico;
import br.gov.basis.sap.sapservice.domain.Sprint;

import br.gov.basis.sap.sapservice.domain.TipoSituacao;
import br.gov.basis.sap.sapservice.repository.OrdemServicoRepository;
import br.gov.basis.sap.sapservice.service.mapper.OrdemServicoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.LocalDate;

import java.util.Collection;
import java.util.List;

@Component


public class OrdemServicoBuilder extends ConstrutorDeEntidade<OrdemServico> {

    @Autowired
    private OrdemServicoRepository ordemServicoRepository;
    @Autowired
    private OrdemServicoMapper ordemServicoMapper;

    @Autowired
    private SprintBuilder sprintBuilder;

    @Autowired
    private TipoSituacaoBuilder tipoSituacaoBuilder;
    @Autowired
    private ProjetoBuilder projetoBuilder;

    @Override
    public OrdemServico construirEntidade() throws ParseException {
        TipoSituacao tipoSituacao=new TipoSituacao();
        tipoSituacao.setDescricao("PAUSADA");
        List<Sprint> sprint=null;

        OrdemServico ordemServico = new OrdemServico();
        ordemServico.setDataProximaEntrega(LocalDate.now());
        ordemServico.setFabrica("São Roque");
        ordemServico.setNome("GP3");
        ordemServico.setPontosFuncao(10.0);
        ordemServico.setPrazo(LocalDate.now());
        ordemServico.setProjeto(projetoBuilder.construir());
        ordemServico.setQtdDefeitosCliente(21);
        ordemServico.setQtdDefeitosInterno(12);
        ordemServico.setSituacao(tipoSituacao);
        ordemServico.setSprints(sprint);


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
