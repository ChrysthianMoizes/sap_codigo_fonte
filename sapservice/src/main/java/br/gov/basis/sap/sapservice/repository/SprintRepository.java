package br.gov.basis.sap.sapservice.repository;

import br.gov.basis.sap.sapservice.domain.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SprintRepository extends JpaRepository<Sprint, Integer> {

}
