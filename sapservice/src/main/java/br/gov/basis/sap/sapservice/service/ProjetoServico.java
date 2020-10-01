package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.repository.ProjetoRepository;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDTO;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDetalheDTO;
import br.gov.basis.sap.sapservice.service.mapper.ProjetoMapper;
import br.gov.nuvem.comum.microsservico.web.rest.errors.BadRequestAlertException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjetoServico {

    private final ProjetoMapper projetoMapper;

    private final ProjetoRepository projetoRepository;

    public List<ProjetoDTO> obterTodos() {
        return projetoMapper.toDto(projetoRepository.findAll());
    }

    public ProjetoDTO obterPorId(Integer id) {

       Projeto projeto = projetoRepository.findById(id)
            .orElseThrow(() -> new BadRequestAlertException
                ("Não foi possível obter o Projeto. ID não está presente", "id", ""));

        return projetoMapper.toDto(projetoRepository.findById(id).get());
    }

    public ProjetoDTO salvar(ProjetoDTO projetoDTO) {
        return projetoMapper.toDto(projetoRepository.save(projetoMapper.toEntity(projetoDTO)));
    }

    public void removerPorId(Integer id) {
        projetoRepository.deleteById(id);
    }

    public List<ProjetoDetalheDTO> obterTodosDetalhe() {
        return projetoRepository.buscarTodosDetalhes();
    }

}
