package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.OrdemServico;
import br.gov.basis.sap.sapservice.service.dto.OrdemServicoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",uses = {})
public interface OrdemServicoMapper extends EntityMapper<OrdemServicoDTO, OrdemServico> {
}
