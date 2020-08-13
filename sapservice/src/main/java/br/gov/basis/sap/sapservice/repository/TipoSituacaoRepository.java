package br.gov.basis.sap.sapservice.repository;

import br.gov.basis.sap.sapservice.domain.TipoSituacao;
import br.gov.basis.sap.sapservice.domain.TipoStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoSituacaoRepository extends JpaRepository<TipoSituacao,Integer> {
}
