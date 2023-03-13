package de.nubedian.cpubackend.Socket;

import de.nubedian.cpubackend.CPU.CPU;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "socket")
public class Socket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(mappedBy = "socket")
    private List<CPU> cpus;


    public Socket() {

    }
    public Socket(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CPU> getCpus() {
        return cpus;
    }

    public void setCpus(List<CPU> cpus) {
        this.cpus = cpus;
    }

    @Override
    public String toString() {
        return "Socket{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cpus=" + cpus +
                '}';
    }
}
