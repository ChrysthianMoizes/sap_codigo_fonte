package br.gov.basis.sap.sapservice.repository;

import br.gov.basis.sap.sapservice.domain.OrdemServico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Integer> {

    List<OrdemServico> findByProjetoId(Integer id);

}
