package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDTO;
import br.gov.basis.sap.sapservice.service.mapper.ProjetoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjetoServico {

    private final ProjetoMapper projetoMapper;

    public List<ProjetoDTO> obterTodos() {
        return Collections.singletonList(projetoMapper.toDto(new Projeto()));
    }

    public ProjetoDTO obterPorId(Integer id) {
        return new ProjetoDTO();
    }

    public ProjetoDTO salvar(ProjetoDTO lider) {
        return new ProjetoDTO();
    }

    public void removerPorId(Integer id) {

    }

}
