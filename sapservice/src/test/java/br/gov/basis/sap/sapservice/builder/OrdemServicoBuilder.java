package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.*;
import br.gov.basis.sap.sapservice.repository.LiderRepository;
import br.gov.basis.sap.sapservice.repository.OrdemServicoRepository;
import br.gov.basis.sap.sapservice.service.dto.SprintDTO;
import br.gov.basis.sap.sapservice.service.mapper.LiderMapper;
import br.gov.basis.sap.sapservice.service.mapper.OrdemServicoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Component
public class OrdemServicoBuilder extends ConstrutorDeEntidade<OrdemServico>{

    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    @Autowired
    private OrdemServicoMapper ordemServicoMapper;

    @Autowired
    private ProjetoBuilder projetoBuilder;

    @Override
    public OrdemServico construirEntidade() throws ParseException {
        OrdemServico ordemservico = new OrdemServico();
        TipoSituacao tiposituacao = new TipoSituacao();
        List<Sprint> sprints = new ArrayList<>();

        tiposituacao.setDescricao("em pausa");

        ordemservico.setNome("Site");
        ordemservico.setDataProximaEntrega(LocalDate.now());
        ordemservico.setFabrica("SQR");
        ordemservico.setPontosFuncao(50.5);
        ordemservico.setPrazo(LocalDate.now());
        ordemservico.setQtdDefeitosCliente(2);
        ordemservico.setQtdDefeitosInterno(20);
        ordemservico.setSituacao(tiposituacao);
        ordemservico.setSprints(sprints);
        ordemservico.setProjeto(projetoBuilder.construir());
        return ordemservico;
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
