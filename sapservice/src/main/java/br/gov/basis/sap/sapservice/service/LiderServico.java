package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.repository.LiderRepository;
import br.gov.basis.sap.sapservice.service.dto.LiderDTO;
import br.gov.basis.sap.sapservice.service.mapper.LiderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class LiderServico {

    private final LiderMapper liderMapper;

    private  final LiderRepository liderRepository;

    public List<LiderDTO> obterTodos() {
        Lider lider =   liderRepository.buscarPorNome("Maria");

        return liderMapper.toDto(liderRepository.findAll());
    }

    public LiderDTO obterPorId(Integer id) {
        return new LiderDTO();
    }

    public LiderDTO salvar(LiderDTO liderDTO) {
        return liderMapper.toDto(liderRepository.save(liderMapper.toEntity(liderDTO)));
    }

    public void removerPorId(Integer id) {

    }

}
