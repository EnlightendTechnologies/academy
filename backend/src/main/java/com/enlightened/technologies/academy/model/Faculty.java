package com.enlightened.technologies.academy.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.io.Serializable;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author hasan
 */
@Entity
@Data
@Table(name = "faculty")
@NoArgsConstructor
public class Faculty implements Serializable {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", length = 50)
    private String id;

    @Column(name = "name", length = 500)
    private String name;

    @Column(name = "designation", length = 100)
    private String designation;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "phoneNumber", length = 11)
    private String phoneNumber;
}
