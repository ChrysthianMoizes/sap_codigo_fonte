package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring",uses = {

})
public interface ProjetoMapper extends EntityMapper<ProjetoDTO, Projeto> {
    @Mapping(source = "idLider", target = "lider.id" )
    @Mapping(source = "idCliente", target = "cliente.id" )
    Projeto toEntity(ProjetoDTO projetoDTO);

    @Mapping(source = "lider.id", target = "idLider" )
    @Mapping(source = "cliente.id", target = "idCliente" )
    ProjetoDTO toDto(Projeto projeto);
}
