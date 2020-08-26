package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.*;
import br.gov.basis.sap.sapservice.repository.ClienteRepository;
import br.gov.basis.sap.sapservice.repository.ProjetoRepository;
import br.gov.basis.sap.sapservice.repository.SprintRepository;
import br.gov.basis.sap.sapservice.service.mapper.ProjetoMapper;
import br.gov.basis.sap.sapservice.service.mapper.SprintMapper;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.Collection;

@Component
public class SprintBuilder extends ConstrutorDeEntidade<Sprint>{

    @Autowired
    private SprintRepository sprintRepository;

    @Autowired
    private SprintMapper sprintMapper;

    @Autowired
    private OrdemServicoBuilder ordemServicoBuilder;

    @Override
    public Sprint construirEntidade() throws ParseException {
        Sprint sprint = new Sprint();

        TipoStatus tipostatus = new TipoStatus();
        tipostatus.setDescricao("Agurdando ");

        Cliente cliente = new Cliente();
        cliente.setId(1);

        sprint.setDataInicio(LocalDate.now());
        sprint.setDataTermino(LocalDate.now());
        sprint.setImpedimento(true);
        sprint.setNome("testeSprint");
        sprint.setPontosFuncao(50.5);
        sprint.setPrazo(true);
        sprint.setStatus(tipostatus);
        sprint.setOrdemServico(ordemServicoBuilder.construir());
        return sprint;
    }

    @Override
    protected Sprint persistir(Sprint entidade) {
        return sprintRepository.save(entidade);
    }

    @Override
    protected Sprint obterPorId(Long id) {
        return null;
    }

    @Override
    protected Collection<Sprint> obterTodos() {
        return null;
    }
}
