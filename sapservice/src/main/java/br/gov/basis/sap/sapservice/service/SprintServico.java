package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.repository.SprintRepository;
import br.gov.basis.sap.sapservice.service.dto.SprintDTO;
import br.gov.basis.sap.sapservice.service.mapper.SprintMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SprintServico {

    private final SprintMapper sprintMapper;

    private final SprintRepository sprintRepository;

    public List<SprintDTO> obterTodos() {
        return sprintMapper.toDto(sprintRepository.findAll());
    }

    public SprintDTO obterPorId(Integer id) {
        return sprintMapper.toDto(sprintRepository.findById(id).get());
    }

    public SprintDTO salvar(SprintDTO sprintDTO) {
        return sprintMapper.toDto(sprintRepository.save(sprintMapper.toEntity(sprintDTO)));
    }

    public void removerPorId(Integer id) {
        sprintRepository.deleteById(id);
    }

}
