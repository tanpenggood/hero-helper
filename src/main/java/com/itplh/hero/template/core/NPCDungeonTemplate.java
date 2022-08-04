package com.itplh.hero.template.core;

import com.itplh.hero.domain.OperationResource;
import com.itplh.hero.event.AbstractEvent;
import com.itplh.hero.event.core.NPCDungeonEvent;
import com.itplh.hero.template.HeroTemplate;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Map;

@Data
@Component
@ConfigurationProperties(prefix = "npc.dungeon")
public class NPCDungeonTemplate implements HeroTemplate {

    private Map<String, OperationResource> mapping;

    @Override
    public Map<String, OperationResource> getOperationResourceTemplate() {
        return mapping;
    }

    @Override
    public Class<? extends AbstractEvent> bindEvent() {
        return NPCDungeonEvent.class;
    }

}
