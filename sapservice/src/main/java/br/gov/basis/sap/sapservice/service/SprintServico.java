package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Sprint;
import br.gov.basis.sap.sapservice.service.dto.SprintDTO;
import br.gov.basis.sap.sapservice.service.mapper.SprintMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SprintServico {

    private final SprintMapper sprintMapper;

    public List<SprintDTO> obterTodos() {
        return Collections.singletonList(sprintMapper.toDto(new Sprint()));
    }

    public SprintDTO obterPorId(Integer id) {
        return new SprintDTO();
    }

    public SprintDTO salvar(SprintDTO lider) {
        return new SprintDTO();
    }

    public void removerPorId(Integer id) {

    }

}
