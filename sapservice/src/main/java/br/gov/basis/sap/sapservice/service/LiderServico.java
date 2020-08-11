package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.service.dto.LiderDTO;
import br.gov.basis.sap.sapservice.service.mapper.LiderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class LiderServico {

    private final LiderMapper liderMapper;

    public List<LiderDTO> obterTodos() {
        return Collections.singletonList(liderMapper.toDto(new Lider()));
    }

    public LiderDTO obterPorId(Integer id) {
        return new LiderDTO();
    }

    public LiderDTO salvar(LiderDTO lider) {
        return new LiderDTO();
    }

    public void removerPorId(Integer id) {

    }

}
