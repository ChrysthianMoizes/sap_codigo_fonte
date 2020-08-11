package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.Sprint;
import br.gov.basis.sap.sapservice.service.dto.SprintDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",uses = {})
public interface SprintMapper extends EntityMapper<SprintDTO, Sprint> {
}
