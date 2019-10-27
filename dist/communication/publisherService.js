"use strict";
/**
 * @author Mauricio Godoy
 * @description Servicio para publicar mensajes  remotos
 * @createdAt 20-03-2019
 * @updatedBy
 * @descriptionUpdate
 * @updatedAt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const configService_1 = require("../common/configService");
const publisher_1 = require("../common/publisher");
class PublisherService {
    static initialize() {
        PublisherService.publisher = new publisher_1.Publisher(configService_1.ConfigService.config.PUB_PORT.toString());
    }
    static send(data, channel) {
        PublisherService.publisher.send(channel, data);
    }
}
exports.PublisherService = PublisherService;
//# sourceMappingURL=publisherService.js.map