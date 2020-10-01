package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.Cliente;
import br.gov.basis.sap.sapservice.service.dto.DominioFixoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",uses = {})
public interface ClienteMapper extends EntityMapper<DominioFixoDTO, Cliente> {
}
