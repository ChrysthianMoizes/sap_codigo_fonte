package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.OrdemServico;
import br.gov.basis.sap.sapservice.service.dto.OrdemServicoDTO;
import br.gov.basis.sap.sapservice.service.mapper.OrdemServicoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdemServicoServico {

    private final OrdemServicoMapper ordemServicoMapper;

    public List<OrdemServicoDTO> obterTodos() {
        return Collections.singletonList(ordemServicoMapper.toDto(new OrdemServico()));
    }

    public OrdemServicoDTO obterPorId(Integer id) {
        return new OrdemServicoDTO();
    }

    public OrdemServicoDTO salvar(OrdemServicoDTO ordemServicoDTO) {
        return new OrdemServicoDTO();
    }

    public void removerPorId(Integer id) {

    }

}
