package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.repository.ClienteRepository;
import br.gov.basis.sap.sapservice.repository.StatusRepository;
import br.gov.basis.sap.sapservice.repository.TipoSituacaoRepository;
import br.gov.basis.sap.sapservice.service.dto.DominioFixoDTO;
import br.gov.basis.sap.sapservice.service.mapper.ClienteMapper;
import br.gov.basis.sap.sapservice.service.mapper.TipoSituacaoMapper;
import br.gov.basis.sap.sapservice.service.mapper.TipoStatusMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DominioFixoServico {

    private final ClienteMapper clienteMapper;
    private final ClienteRepository clienteRepository;

    private final TipoStatusMapper tipoStatusMapper;;
    private final StatusRepository tipoStatusRepository;

    private final TipoSituacaoMapper tipoSituacaoMapper;
    private final TipoSituacaoRepository tipoSituacaoRepository;

    public List<DominioFixoDTO> obterClientes() {
        return clienteMapper.toDto(clienteRepository.findAll());
    }

    public List<DominioFixoDTO> obterSituacoes() {
        return tipoSituacaoMapper.toDto(tipoSituacaoRepository.findAll());
    }

    public List<DominioFixoDTO> obterStatus() {
        return tipoStatusMapper.toDto(tipoStatusRepository.findAll());
    }

}
