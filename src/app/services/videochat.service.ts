import { connect, ConnectOptions, LocalTrack, Room } from 'twilio-video';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject , Observable } from 'rxjs';

interface AuthToken {
    token: string;
    room: string;
}

export interface NamedRoom {
    id: string;
    name: string;
    maxParticipants?: number;
    participantCount: number;
}

export type Rooms = NamedRoom[];

@Injectable({
    providedIn: 'root'
})
export class VideoChatService {
    $roomsUpdated: Observable<boolean>;

    private roomBroadcast = new ReplaySubject<boolean>();

    constructor(private readonly http: HttpClient) {
        this.$roomsUpdated = this.roomBroadcast.asObservable();
    }

    private async getAuthToken() {
        const auth =
            await this.http
                      .get<AuthToken>(`http://localhost:3000/twilio/token`)
                      .toPromise();
        return auth.token;
    }

    async getRoomName() {
        const auth =
            await this.http
                      .get<AuthToken>(`http://localhost:3000/twilio/token`)
                      .toPromise();
                      console.log(auth)
        return auth.room;
    }


    getAllRooms() {

        return this.http
                   .get<Rooms>('http://localhost:3000/twilio/rooms/DailyStandup')
                   .toPromise();
    }

    async joinOrCreateRoom(name: string, tracks: LocalTrack[]) {
        let room: Room = null;
        try {
            const token = await this.getAuthToken();
            console.debug("CONEC");       
            room =
                await connect(
                    token, {
                        name,
                        tracks,
                        dominantSpeaker: true
                    } as ConnectOptions);
                    console.log(room);
        } catch (error) {
            console.error(`Unable to connect to Room: ${error.message}`);
        } finally {
            if (room) {
                this.roomBroadcast.next(true);
            }
        }

        return room;
    }

    nudge() {
        this.roomBroadcast.next(true);
    }
}