package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.repository.LiderRepository;
import br.gov.basis.sap.sapservice.repository.ProjetoRepository;
import br.gov.basis.sap.sapservice.service.dto.LiderDTO;
import br.gov.basis.sap.sapservice.service.mapper.LiderMapper;
import br.gov.nuvem.comum.microsservico.web.rest.errors.BadRequestAlertException;
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
    private final ProjetoRepository projetoRepository;

    public List<LiderDTO> obterTodos() {
        return liderMapper.toDto(liderRepository.findAll());
    }

    public List<LiderDTO> obterTodosPorNome(String nome) {
        return liderMapper.toDto(liderRepository.buscarTodosPorNome(nome));
    }

    public LiderDTO obterPorId(Integer id) {

        Lider lider = liderRepository.findById(id)
            .orElseThrow(() -> new BadRequestAlertException("Não foi possível obter o líder. ID não está presente", "id", ""));

        return liderMapper.toDto(lider);
    }

    public LiderDTO salvar(LiderDTO liderDTO) {
        return liderMapper.toDto(liderRepository.save(liderMapper.toEntity(liderDTO)));
    }

    public void removerPorId(Integer id) {
        liderRepository.deleteById(id);
    }

}
