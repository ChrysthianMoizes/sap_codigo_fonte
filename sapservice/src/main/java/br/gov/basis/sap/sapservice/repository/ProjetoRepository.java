package br.gov.basis.sap.sapservice.repository;

import br.gov.basis.sap.sapservice.domain.Projeto;
import br.gov.basis.sap.sapservice.service.dto.ProjetoDetalheDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjetoRepository extends JpaRepository<Projeto,Integer> {
    @Query("SELECT new br.gov.basis.sap.sapservice.service.dto.ProjetoDetalheDTO(o.projeto.nome, COUNT(o.id), SUM(o.pontosFuncao)) FROM OrdemServico o GROUP BY o.projeto.nome ")
    List<ProjetoDetalheDTO> buscarTodosDetalhes();
}
