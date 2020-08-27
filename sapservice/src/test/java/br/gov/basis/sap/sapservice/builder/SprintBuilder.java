package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Cliente;
import br.gov.basis.sap.sapservice.domain.Sprint;
import br.gov.basis.sap.sapservice.domain.TipoStatus;
import br.gov.basis.sap.sapservice.repository.SprintRepository;
import br.gov.basis.sap.sapservice.service.mapper.SprintMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.Collection;

@Component
public class SprintBuilder extends ConstrutorDeEntidade<Sprint> {

    @Autowired
    private SprintRepository sprintRepository;

    @Autowired
    private SprintMapper sprintMapper;

    @Autowired
    private OrdemServicoBuilder ordemServicoBuilder;

    @Autowired
    private TipoStatusBuilder tipoStatusBuilder;

    @Override
    public Sprint construirEntidade() throws ParseException {
        Sprint sprint = new Sprint();
        TipoStatus tipoStatus=new TipoStatus();
        tipoStatus.setDescricao("Pausada");
        Cliente cliente=new Cliente();
        cliente.setId(1);

        sprint.setDataInicio(LocalDate.now());
        sprint.setDataTermino(LocalDate.now());
        sprint.setImpedimento(true);
        sprint.setOrdemServico(ordemServicoBuilder.construir());
        sprint.setNome("Nova");
        sprint.setPontosFuncao(50.8);
        sprint.setPrazo(true);
        sprint.setStatus(tipoStatus);
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
