package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.Lider;
import br.gov.basis.sap.sapservice.service.dto.LiderDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",uses = {})
public interface LiderMapper extends EntityMapper<LiderDTO, Lider> {
}
