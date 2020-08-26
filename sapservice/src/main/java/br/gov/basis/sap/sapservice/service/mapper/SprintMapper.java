package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.Sprint;
import br.gov.basis.sap.sapservice.service.dto.SprintDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring",uses = {})
public interface SprintMapper extends EntityMapper<SprintDTO, Sprint> {
    @Mapping(source = "idStatus", target = "status.id" )
    @Mapping(source = "idOrdemServico", target = "ordemServico.id" )
    Sprint toEntity(SprintDTO sprintDTO);

    @Mapping(source = "status.id", target = "idStatus" )
    @Mapping(source = "ordemServico.id", target = "idOrdemServico" )
    SprintDTO toDto(Sprint sprint);
}
