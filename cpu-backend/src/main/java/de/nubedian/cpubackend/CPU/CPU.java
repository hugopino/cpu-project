package de.nubedian.cpubackend.CPU;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "cpustable")
public class CPU {

    private int id;
    private String brand;
    private String model;
    private String socket;
    private double clockspeed;
    private String clockspeedUnit;
    private int cores;
    private int threads;
    private int tdp;
    private double price;
    private String buyLink;
    @ElementCollection
    private List<String> aviableSockets;


    public CPU() {

    }

    public CPU(int id, String brand, String model, String socket, double clockspeed, String clockspeedUnit, int cores, int threads, int tdp, double price, String buyLink, List<String> aviableSockets) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.socket = socket;
        this.clockspeed = clockspeed;
        this.clockspeedUnit = clockspeedUnit;
        this.cores = cores;
        this.threads = threads;
        this.tdp = tdp;
        this.price = price;
        this.buyLink = buyLink;
        this.aviableSockets = aviableSockets;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSocket() {
        return socket;
    }

    public void setSocket(String socket) {
        this.socket = socket;
    }

    public double getClockspeed() {
        return clockspeed;
    }

    public void setClockspeed(double clockspeed) {
        this.clockspeed = clockspeed;
    }

    public String getClockspeedUnit() {
        return clockspeedUnit;
    }

    public void setClockspeedUnit(String clockspeedUnit) {
        this.clockspeedUnit = clockspeedUnit;
    }

    public int getCores() {
        return cores;
    }

    public void setCores(int cores) {
        this.cores = cores;
    }

    public int getThreads() {
        return threads;
    }

    public void setThreads(int threads) {
        this.threads = threads;
    }

    public int getTdp() {
        return tdp;
    }

    public void setTdp(int tdp) {
        this.tdp = tdp;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getBuyLink() {
        return buyLink;
    }

    public void setBuyLink(String buyLink) {
        this.buyLink = buyLink;
    }

    public List<String> getAviableSockets() {
        return aviableSockets;
    }

    public void setAviableSockets(List<String> aviableSockets) {
        this.aviableSockets = aviableSockets;
    }
}
