package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.TipoStatus;
import br.gov.basis.sap.sapservice.service.dto.DominioFixoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",uses = {})
public interface TipoStatusMapper extends EntityMapper<DominioFixoDTO, TipoStatus> {
}
