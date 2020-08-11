package br.gov.basis.sap.sapservice.service;

import br.gov.basis.sap.sapservice.domain.Cliente;
import br.gov.basis.sap.sapservice.domain.TipoSituacao;
import br.gov.basis.sap.sapservice.domain.TipoStatus;
import br.gov.basis.sap.sapservice.service.dto.DominioFixoDTO;
import br.gov.basis.sap.sapservice.service.mapper.ClienteMapper;
import br.gov.basis.sap.sapservice.service.mapper.TipoSituacaoMapper;
import br.gov.basis.sap.sapservice.service.mapper.TipoStatusMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DominioFixoServico {

    private final ClienteMapper clienteMapper;
    private final TipoSituacaoMapper tipoSituacaoMapper;
    private final TipoStatusMapper tipoStatusMapper;

    public List<DominioFixoDTO> obterClientes() {
        return Collections.singletonList(clienteMapper.toDto(new Cliente()));
    }

    public List<DominioFixoDTO> obterSituacoes() {
        return Collections.singletonList(tipoSituacaoMapper.toDto(new TipoSituacao()));
    }

    public List<DominioFixoDTO> obterStatus() {
        return Collections.singletonList(tipoStatusMapper.toDto(new TipoStatus()));
    }

}
