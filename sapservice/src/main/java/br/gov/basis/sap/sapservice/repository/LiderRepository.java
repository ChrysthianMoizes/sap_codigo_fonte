package br.gov.basis.sap.sapservice.repository;

import br.gov.basis.sap.sapservice.domain.Lider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiderRepository extends JpaRepository<Lider, Integer> {
}
