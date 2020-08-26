package br.gov.basis.sap.sapservice.service.mapper;


import br.gov.basis.sap.sapservice.domain.OrdemServico;
import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.service.dto.OrdemServicoDTO;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDTO;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring",uses = {
    SprintMapper.class
})
public interface OrdemServicoMapper extends EntityMapper<OrdemServicoDTO, OrdemServico> {
    @Mapping(source = "idSituacao", target = "situacao.id" )
    @Mapping(source = "idProjeto", target = "projeto.id" )
    OrdemServico toEntity(OrdemServicoDTO ordemServicoDTO);

    @Mapping(source = "situacao.id", target = "idSituacao" )
    @Mapping(source = "projeto.id", target = "idProjeto" )
    OrdemServicoDTO toDto(OrdemServico ordemServico);

    @AfterMapping
    default void atualizarRelacionamentos(@MappingTarget OrdemServico ordemServico) {
        ordemServico.getSprints().forEach(sprint -> sprint.setOrdemServico(ordemServico));
    }
}
