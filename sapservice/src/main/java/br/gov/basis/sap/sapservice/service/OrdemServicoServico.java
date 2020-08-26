package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.repository.OrdemServicoRepository;
import br.gov.basis.sap.sapservice.service.dto.OrdemServicoDTO;
import br.gov.basis.sap.sapservice.service.mapper.OrdemServicoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdemServicoServico {

    private final OrdemServicoMapper ordemServicoMapper;

    private final OrdemServicoRepository ordemServicoRepository;

    public List<OrdemServicoDTO> obterTodos() {
        return ordemServicoMapper.toDto(ordemServicoRepository.findAll());
    }

    public OrdemServicoDTO obterPorId(Integer id) {
        return ordemServicoMapper.toDto(ordemServicoRepository.findById(id).get());
    }

    public List<OrdemServicoDTO> obterPorProjeto(Integer id) {
        return ordemServicoMapper.toDto(ordemServicoRepository.findByProjetoId(id));
    }

    public OrdemServicoDTO salvar(OrdemServicoDTO ordemServicoDTO) {
        return ordemServicoMapper.toDto(ordemServicoRepository.save(ordemServicoMapper.toEntity(ordemServicoDTO)));
    }

    public void removerPorId(Integer id) {
        ordemServicoRepository.deleteById(id);
    }

}
